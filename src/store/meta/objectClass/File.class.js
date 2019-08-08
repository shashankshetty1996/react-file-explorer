import uuid from 'uuid';

class File {
  constructor({ name, creator, size, date }) {
    this.id = uuid();
    this.name = name;
    this.creator = creator;
    this.size = size;
    this.date = date;
    this.is_directory = false;
  }
}

export default File;
