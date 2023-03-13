import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  IUseDynamicModuleLoader,
  useDynamicReducerLoader,
} from "@app/providers/store";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import {
  articlesReducer,
  getArticlesData,
  selectArticlesData,
  selectArticlesIsLoading,
} from "@entities";
import { Loader } from "@shared";

const initialStoreModules: IUseDynamicModuleLoader[] = [
  {
    key: "articles",
    reducer: articlesReducer,
    removeAfterUnmount: true,
  },
];

export default memo(() => {
  const { addStoreDynamicModules, removeStoreDynamicModules } =
    useDynamicReducerLoader(initialStoreModules);
  const dispatch = useAppDispatch();

  const articles = useAppSelector(selectArticlesData);
  const isLoading = useAppSelector(selectArticlesIsLoading);

  useEffect(() => {
    addStoreDynamicModules();

    return () => {
      removeStoreDynamicModules();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getArticlesData());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}

      {!isLoading &&
        articles &&
        articles.map(article => <p key={article.id}>{article.title}</p>)}
    </div>
  );
});
