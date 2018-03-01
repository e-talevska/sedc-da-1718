$(function () {
    function User(id, firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }    

    function Task(id, taskName, userId) {
        this.id = id;
        this.name = taskName;
        this.userId = userId;
    }

    function createUserRow(user) {
        let usersTable = $("#usersTable>tbody");
        let tr = $("<tr>").attr('id', 'user-' + user.id);
        $("<td>").text(user.id).appendTo(tr);
        $("<td>").text(user.firstName).appendTo(tr);
        $("<td>").text(user.lastName).appendTo(tr);
        usersTable.append(tr);
    }

    function createTaskRow(task) {
        let toDoTable = $("#toDoTable>tbody");
        let tr = $("<tr>");
        $("<td>").text(task.id).appendTo(tr);
        $("<td>").text(task.name).appendTo(tr);

        let link = $("<a>").text(task.userId)
                            .attr('href', '#user-'+task.userId);
        $("<td>").append(link) //add the link inside the cell
                .appendTo(tr);  //add the cell to the row

        let editButton = $("<a>").attr('href', '#')
                                 .addClass('edit-row')
                                 .html(`<i class="glyphicon glyphicon-pencil"></i>`)
                                 // .on('click', editTask);
        $("<td>").append(editButton)
                .appendTo(tr);

         let saveButton = $("<a>").attr('href', '#')
                                 .addClass('save-row')
                                 .addClass('hidden')
                                 .html(`<i class="glyphicon glyphicon-floppy-disk"></i>`)
                                 // .on('click', saveTask);
        $("<td>").append(saveButton)
                .appendTo(tr);


        toDoTable.append(tr);
    }

    function editTask(event) {
        event.preventDefault();
        let cell = $(this) //link
                    .parent() //td no. 3
                    .prev() //td no. 2
                    .prev(); //td no. 1
        let value = cell.text();
        cell.text("");
        $("<input type='text'>").val(value).appendTo(cell);

        $(this).addClass('hidden');
        $(this)
        .parent() //td
        .next() //next td
        .children('.save-row') //find link with class save-row
        .removeClass('hidden');
    }

    function saveTask(event) {
        event.preventDefault();
        let cell = $(this) //link
                    .parent() //td no. 4
                    .prev()//td no. 3
                    .prev() //td no. 2
                    .prev(); //td no. 1
        let value = cell.children("input").val();
        cell.text(value);

        $(this).addClass('hidden');
        $(this)
        .parent() //td
        .prev() //next td
        .children('.edit-row') //find link with class save-row
        .removeClass('hidden');

        // $(this).parent().parent().find('.edit-row')
    }


    let users = [], tasks = [], userId = 1, taskId = 1;

    $("#toDoTable").on('click', 'a.edit-row', editTask);
    $("#toDoTable").on('click', 'a.save-row', saveTask);

    $("#insertTaskForm").on('submit', function(event){
        event.preventDefault();
        // console.log($(this.firstName), $("#inputFirstName"));
        let firstName = this.firstName.value;
        let lastName = this.lastName.value;
        let taskName = this.task.value;
        let user = null;

        for(let i = 0; i < users.length; i++) {
            if (users[i].firstName == firstName && users[i].lastName == lastName) {
                user = users[i];
                break;
            }
        }        

        //if a user with same first and last name does not exist
        //create new user
        if (user == null) {
            user = new User(userId, firstName, lastName);
            userId++;
            users.push(user);
            createUserRow(user);
        }

        let task = new Task(taskId, taskName, user.id);
        taskId++;
        tasks.push(task);
        createTaskRow(task);
    });
});