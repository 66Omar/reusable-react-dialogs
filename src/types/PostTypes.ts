export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
};

export type PostProps = {
  post: Post;
  onDelete: (postId: number) => void;
};
