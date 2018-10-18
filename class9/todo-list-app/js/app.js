/**
 * This is importan, because i want the code in this file
 * to get executed after the document has been loaded
 */
$(document).ready(() => {

  const button = $('#add-task-button');
  const input = $('#add-task-input');
  const tbody = $('#task-list-table tbody');
  const rowTemplate = `<tr>
  <td scope="row">{task}</td>
  <td>
    <a>Delete</a>
  </td>
</tr>`;

  /**
   * AC: Build a text box to create a new task
   *    . add an event listener to the button (done)
   *    . when clicked, grab the value of the new-task-input (done)
   *    . if empty, display an alert message (done)
   *    . if not empty, add task to table (done)
   *    . once task has been added, clean input
   *    . after cleaning input, focus inon it.
   */
  button.click(() => {

    console.log('button clicked');

    const val = input.val();
    if( val.length === 0 ) {
      console.error('task input was empty');
      alert('Please type in a task to submit');
      // we are putting the return statement to ensure
      // that nothing else will get executed.
      return;
    }

    console.log('adding new row');
    const rowContent = rowTemplate.replace('{task}', val);
    tbody.append(rowContent);

    console.log('cleaning input');
    input.val('');

    console.log('focusing on input');
    input.focus();
  });
  
});