import { post, get, put } from '../../api';

export default class TaskService {
  static async add(payload) {
    const data = await post('task', payload);
    return data.task;
  }

  static async getAllTasks(filter = 'todo') {
    const data = await get('task', filter);
    return data;
  }

  static async updateTask(payload) {
    const data = await put('task', payload);
    return data.task
  }
}

