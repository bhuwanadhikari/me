export class Blog {
  _id: string;
  title: string;
  imageUrl: string;
  body: string;
  // comments: [{commenter: string; body: string; date: Date}];
  likes: number;
  dislikes: number;
}
