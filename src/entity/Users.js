import User from './User.js';

// TODO: Criar um Symbol para a propriedade privada 'kUsers'
const kUsers = Symbol('kUsers')
const kData = Symbol('kData')
class Users {
  constructor() {
    // TODO: inicializar a propriedade privada 'kData' como uma estrutura importante vista no curso
    this[kData] = new Set()
  }

  add(userRaw) {
    const user = new User(userRaw)
    this[kData].add(user)
  }

  hasUsers() {
    return this[kData].size > 0
  }

  *[Symbol.iterator]() {
    for (const user of this[kData]) {
      yield user
    }
  }
  
}

export default Users;
