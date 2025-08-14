function addTask() {
    const task = document.getElementById("taskID");
    if (task.value.trim() === "") {
        alert("Please add the Task");
        return;
    }

    const list = document.getElementById("tasklist");

    const li = document.createElement("li");
    li.classList.add("my-2", "task-item", "d-flex", "align-items-center", "justify-content-between");

    const sp = document.createElement("span");
    sp.classList.add("task-text");
    sp.innerText = task.value.trim();

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-warning", "btn-sm", "mx-1");
    editBtn.innerHTML = "Edit";
    editBtn.onclick = () => {
        // Replace span with input for editing
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = sp.innerText;
        editInput.classList.add("form-control", "form-control-sm", "me-2");
        li.replaceChild(editInput, sp);

        // Change Edit button to Save
        editBtn.innerHTML = "Save";
        editBtn.classList.remove("btn-warning");
        editBtn.classList.add("btn-success");

        editBtn.onclick = () => {
            if (editInput.value.trim() === "") {
                alert("Task cannot be empty!");
                return;
            }
            sp.innerText = editInput.value.trim();
            li.replaceChild(sp, editInput);
            editBtn.innerHTML = "Edit";
            editBtn.classList.remove("btn-success");
            editBtn.classList.add("btn-warning");
            editBtn.onclick = () => {
                // Re-run edit logic
                editBtn.onclick = null; // Prevent stacking
                editBtn.click();
            };
        };
    };

    // Delete Button
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "btn-sm", "mx-1");
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        li.remove();
    };

    // Button group
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("d-flex");
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(btn);

    li.appendChild(sp);
    li.appendChild(btnGroup);
    list.appendChild(li);
    document.getElementById("taskID").value = '';
}