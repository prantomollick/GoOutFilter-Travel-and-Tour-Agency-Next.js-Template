// Interface for the blog data
export interface BlogData {
  blogId: number;
  image: string;
  title: string;
  createdAt: Date;
}

// Generate dummy data
export const blogData: BlogData[] = [
  {
    blogId: 1,
    image: "/blog/blog-1.jpg",
    title: "10 European ski destinations you should visit this winter",
    createdAt: new Date(2023, 9, 26)
  },
  {
    blogId: 2,
    image: "/blog/blog-2.jpg",
    title: "Booking travel during Corona: good advice in an uncertain time",
    createdAt: new Date()
  },
  {
    blogId: 3,
    image: "/blog/blog-3.jpg",
    title: "Where can I go? 5 amazing countries that are open right now",
    createdAt: new Date(2025, 0, 1)
  }
];
