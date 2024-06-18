export type Tag = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Post = {
  id: string;
  title: string;
  tldr: string;
  thumbnailUrl: string;
  upvotesCount: number;
  viewsCount: number;
  sourceUrl: string;
  redirectCode: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
};
