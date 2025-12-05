import { router } from './init.ts';
import { commentRouter } from './routers/comment.ts';
import { postRouter } from './routers/post.ts';
import { userRouter } from './routers/user.ts';

export const appRouter = router({
  comment: commentRouter,
  post: postRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;

export * from './views.ts';
