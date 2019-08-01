import uuid from 'uuid';

const Directory = {
  currentDirectory: { id: 0, name: '' },
  root: [
    {
      id: uuid(),
      name: 'apps',
      is_directory: true,
      creator: 'shashank',
      size: '542mb',
      date: '27th Jul, 2019',
      children: [],
    },
    {
      id: uuid(),
      name: 'pictures',
      is_directory: true,
      creator: 'shashank',
      size: '4098mb',
      date: '27th Jul, 2019',
      children: [],
    },
    {
      id: uuid(),
      name: 'videos',
      is_directory: true,
      creator: 'shashank',
      size: '2gb',
      date: '27th Jul, 2019',
      children: [],
    },
    {
      id: uuid(),
      name: 'docs',
      is_directory: true,
      creator: 'shashank',
      size: '8146mb',
      date: '27th Jul, 2019',
      children: [
        {
          id: uuid(),
          name: 'work',
          is_directory: true,
          creator: 'shashank',
          size: '2gb',
          date: '27th Jul, 2019',
          children: [
            {
              id: uuid(),
              name: 'e.pdf',
              is_directory: false,
              creator: 'shashank',
              size: '2mb',
              date: '27th Jul, 2019',
            },
            {
              id: uuid(),
              name: 'f.ts',
              is_directory: false,
              creator: 'shashank',
              size: '305kb',
              date: '27th Jul, 2019',
            },
          ],
        },
        {
          id: uuid(),
          name: 'c.pdf',
          is_directory: false,
          creator: 'shashank',
          size: '4mb',
          date: '27th Jul, 2019',
        },
        {
          id: uuid(),
          name: 'd.docx',
          is_directory: false,
          creator: 'shashank',
          size: '2mb',
          date: '27th Jul, 2019',
        },
      ],
    },
    {
      id: uuid(),
      name: 'a.pdf',
      is_directory: false,
      creator: 'shashank',
      size: '900kb',
      date: '27th Jul, 2019',
    },
    {
      id: uuid(),
      name: 'b.jpg',
      is_directory: false,
      creator: 'shashank',
      size: '242kb',
      date: '27th Jul, 2019',
    },
  ],
};

export default Directory;
