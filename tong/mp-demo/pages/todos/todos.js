Page({
  data: {
    todo: '',
    finishedTodos: [],
    todos: [
      {
        id: 1,
        name: '今天要遛弯'
      }, {
        id: 2,
        name: '今天要买菜'
      }
    ],
  },
  handleTodo(event) {
    console.log(event);
    
    const { position } = event.detail;
    switch(position) {
      case 'left': {
        console.log('左边打开了')
        // 代办完成，将该代办从 todos 数组中删除，并且添加到 finishedTodos 中
        let { index, id, name } = event.target.dataset;

        let todos = this.data.todos
        let finishedTodos = this.data.finishedTodos

        todos.splice(index, 1)
        finishedTodos.push({ id, name })

        this.setData({
          todos: todos,
          finishedTodos: finishedTodos
        })

        break;
      }
      case 'right': {
        console.log('右边打开了')
        // 删除代办，将该代办从 todos 数组中删除
        console.log(event)

        let {index, id} = event.target.dataset;

        let todos = this.data.todos

        todos.splice(index, 1)

        this.setData({
          todos: todos
        })

        break;
      }
    }
  }
})