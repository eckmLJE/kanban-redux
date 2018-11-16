const sampleTasks = [
  { id: 1, bucketId: 1, taskName: "task1" },
  { id: 2, bucketId: 1, taskName: "task2" },
  { id: 3, bucketId: 2, taskName: "task3" },
  { id: 4, bucketId: 2, taskName: "task4" },
  { id: 5, bucketId: 3, taskName: "task5" },
  { id: 6, bucketId: 3, taskName: "task6" },
  { id: 7, bucketId: 4, taskName: "task7" },
  { id: 8, bucketId: 4, taskName: "task8" }
];

const sampleBuckets = [
  {
    title: "Planning",
    id: 1
  },
  {
    title: "Design",
    id: 2
  },
  {
    title: "Development",
    id: 3
  },
  {
    title: "Deployment",
    id: 4
  }
];

const spreadNewState = state => ({
  ...state,
  buckets: [...state.buckets],
  tasks: [...state.tasks]
});

const findTask = (tasks, id) => tasks.find(task => task.id === id);

const bucketsReducer = (
  state = {
    buckets: sampleBuckets,
    tasks: sampleTasks,
    taskIdCounter: 9,
    bucketIdCounter: 5
  },
  action
) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      const newState = spreadNewState(state);
      action.task.id = newState.taskIdCounter++;
      newState.tasks.push(action.task);
      return newState;
    case "PROMOTE_TASK":
      const promoteState = spreadNewState(state);
      let promoteTask = findTask(promoteState.tasks, action.task.id);
      promoteTask.bucketId++;
      return promoteState;
    case "DEMOTE_TASK":
      const demoteState = spreadNewState(state);
      let demoteTask = findTask(demoteState.tasks, action.task.id);
      demoteTask.bucketId--;
      return demoteState;
    case "ADD_NEW_BUCKET":
      const newBucketState = spreadNewState(state);
      action.bucket.id = newBucketState.bucketIdCounter++;
      newBucketState.buckets.push(action.bucket);
      return newBucketState;
    default:
      return state;
  }
};

export default bucketsReducer;
