export const addNewTask = task => ({
  type: "ADD_NEW_TASK",
  task
});

export const promoteTask = task => ({
  type: "PROMOTE_TASK",
  task
});

export const demoteTask = task => ({
  type: "DEMOTE_TASK",
  task
});
