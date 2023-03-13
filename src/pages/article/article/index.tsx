import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  IUseDynamicModuleLoader,
  useDynamicReducerLoader,
} from "@app/providers/store";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import {
  articleReducer,
  getArticleData,
  selectArticleData,
  selectArticleError,
  selectArticleIsLoading,
} from "@entities";

import { Error } from "@pages";
import { Avatar, Loader } from "@shared";

const initialStoreModules: IUseDynamicModuleLoader[] = [
  {
    key: "article",
    reducer: articleReducer,
    removeAfterUnmount: true,
  },
];

export default memo(() => {
  const { id } = useParams();
  const { addStoreDynamicModules, removeStoreDynamicModules } =
    useDynamicReducerLoader(initialStoreModules);
  const dispatch = useAppDispatch();

  const article = useAppSelector(selectArticleData);
  const isLoading = useAppSelector(selectArticleIsLoading);
  const error = useAppSelector(selectArticleError);

  useEffect(() => {
    addStoreDynamicModules();

    return () => {
      removeStoreDynamicModules();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getArticleData(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !article) {
    return <Error />;
  }

  return (
    <div>
      {article.img && (
        <Avatar
          width={150}
          height={150}
          src={article.img}
          alt={article.title}
        />
      )}

      {article.title && <p>{article.title}</p>}
      {article.subtitle && <p>{article.subtitle}</p>}
    </div>
  );
});
