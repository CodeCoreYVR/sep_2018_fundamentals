/**
 * This is importan, because i want the code in this file
 * to get executed after the document has been loaded
 */
$(document).ready(() => {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBO2ZRBA_QqcillEl0gbZypOxVru-W7W4s",
    authDomain: "todo-list-d6214.firebaseapp.com",
    databaseURL: "https://todo-list-d6214.firebaseio.com",
    projectId: "todo-list-d6214",
    storageBucket: "todo-list-d6214.appspot.com",
    messagingSenderId: "976745460655"
  };
  const button = $('#add-task-button');
  const input = $('#add-task-input');
  const tbody = $('#task-list-table tbody');
  const completeTemplate = '<span class="text-success">Complete</span>';
  const incompleteTemplate = '<span class="text-warning">Incomplete</span>';
  const rowTemplate = `<tr id="{id}">
  <td scope="row">{task} ({complete})</td>
  <td>
    <a class="complete">{markAsCompleteText}</a> |
    <a class="delete">Delete</a>
  </td>
</tr>`;

  // initializes our firebase application
  firebase.initializeApp(config);
  /**
   * the following creates a reference
   * to my firebase tasks table.
   */
  const taskRef = firebase.database().ref('tasks');
  
  /**
   * This function will receive 2 parameters,
   * one is the id of the row which must be unique,
   * and the other is the task that need to be taken care of.
   */
  const addTableRow = (id, task, complete) => {
    console.log('adding new row');
    const rowContent = rowTemplate
      .replace('{task}', task)
      .replace('{id}', id)
      .replace('{complete}', complete ? completeTemplate : incompleteTemplate)
      .replace('{markAsCompleteText}', complete ? 'Mark as incomplete' : 'Mark as complete');
    tbody.append(rowContent);

    console.log('cleaning input');
    input.val('');

    console.log('focusing on input');
    input.focus();
  };

  /**
   * Add a firebase event listener that
   * will be triggered, when a new task
   * is added to my tasks table.
   */
  taskRef.on('child_added', (record) => {
    const data = record.val(); // this will extract the task information
    const id = record.key;
    console.log('new item has been added', record.val());
    // this will call the function that adds a table row.
    addTableRow( id, data.task, data.complete );
  });

  /**
   * add a firebase event listener that
   * will be triggered when a task has been
   * removed.
   */
  taskRef.on('child_removed', (record) => {
    console.log('child has been removed', record.key);
    $(`#${record.key}`).remove();
  })

  taskRef.on('child_changed', (record) => {
    const id = record.key;
    const data = record.val();
    console.log('child has been updated', record.key);

    $(`#${id} td:nth(0)`).html(`${data.task} ${data.complete ? completeTemplate : incompleteTemplate}`);
    $(`#${id} a.complete`).html( data.complete ? 'Mark as Incomplete' : 'Mark as Complete' );
  })

  /**
   * AC: Build a text box to create a new task
   *    . add an event listener to the button (done)
   *    . when clicked, grab the value of the new-task-input (done)
   *    . if empty, display an alert message (done)
   *    . if not empty, add task to table (done)
   *    . once task has been added, clean input
   *    . after cleaning input, focus inon it.
   */
  button.on('click', () => {

    console.log('button clicked');

    const task = input.val();
    if( task.length === 0 ) {
      console.error('task input was empty');
      alert('Please type in a task to submit');
      // we are putting the return statement to ensure
      // that nothing else will get executed.
      return;
    }

    // this dispatches a firebase event.
    // to push data into out tasks table.
    console.log('adding new row to Firebase');
    const data = {
      task: task,
      complete: false
    };
    taskRef.push( data );

  });

  // this will add an event listener to all anchor tags
  // (links) that are found in the DOM in the present
  // and in the future.
  $(document).on('click', '#task-list-table tbody a.delete', function() {
    const id = $(this).closest('tr').attr('id');
    console.log(`the id i found is ${id}`);
    taskRef.child(id).remove();
  });

  $(document).on('click', '#task-list-table tbody a.complete', function() {
    const id = $(this).closest('tr').attr('id');
    console.log(`the id i found is ${id}`);
    firebase.database().ref('tasks/' + id).once('value').then((record) => {
      console.log(record.val())
      taskRef.child(id).update({
        complete: !record.val().complete
      });
    })
    // taskRef.child(id).update({});
  });

});