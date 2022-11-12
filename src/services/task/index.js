import { post, get, put } from '../../api';

export default class TaskService {
  static async add(payload) {
    const data = await post('tasks', payload);
    return data.task;
  }

  static async getAllTasks() {
    const data = await get('tasks');
    return data;
  }

  static async updateTask(payload) {
    const data = await put('tasks', payload);
    return data.task
  }
}

