export type Tag = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Post = {
  id: string;
  title: string;
  tldr: string;
  thumbnailUrl: string;
  upvotesCount: number;
  viewsCount: number;
  resourceUrl: string;
  createdAt: Date;
  updatedAt: Date;
  tags: Tag[];
};
