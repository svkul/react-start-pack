import { TestAsyncThunk } from "@app/config/test-helpers";

import { getArticleData } from ".";

describe("get profile data", () => {
  test("should be fulfilled with valid data", async () => {
    const thunk = new TestAsyncThunk(getArticleData);

    const articleData = {
      id: "1",
      title: "First article",
      subtitle: "Some text",
      userId: "1",
      img: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg",
      views: 10,
      createdAt: "13.03.2023",
      type: ["RANDOM"],
      blocks: [
        {
          id: "1",
          type: "TEXT",
          title: "Title",
          paragraph: ["Paragraph 1", "Paragraph 2"],
        },
        {
          id: "2",
          type: "CODE",
          // eslint-disable-next-line quotes
          code: '<h3>6. «Мой худой друг ест как не в себя, а другой клюет хлебные крошки и толстый.»</h3><p>По опыту: если взять под контроль каждого из этих индивидуумов, окажется, что первый много ест только при тебе. В остальное время он забудет, отвлечется, съест огурец, перебьется чашкой кофе да и в целом много двигается. А второй экземпляр мало ест только по заявлениям. Полные люди часто стесняются есть при других, от этого может сложится впечатление, что они всегда мало едят. Полные часто забывают, что они ели. Осознанно или неосознанно лгут о количестве еды. Даже если ведут пищевой дневник и знают, что его будут проверять, они указывают заниженное количество калорий.&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/7594141" rel="noopener noreferrer nofollow">Исследование, в котором 9 из 10 девушек соврали в отчетах, хотя их обучили и сказали, что все будет сверяться.</a></p><p><a href="https://www.ncbi.nlm.nih.gov/pubmed/20010905" rel="noopener noreferrer nofollow">В этом крутом исследовании на парах однояйцевых близнецов, в которых один из близнецов был с ожирением, оказалось, что полные врали в дневниках питания на 800 ккал. в сутки в сторону занижения, а тощие на 400 ккал.</a></p><p>В целом, толстячки обычно недооценивают калорийность рациона, а худые переоценивают.</p><p>Как видишь, похудение — это минное поле. Плюсуй, если удалось пролить больше света в эту тему.</p><blockquote><p><strong>Если тебе понравилась статься, ты тренируешься или планируешь начать, подписывайся на мой Телеграм канал</strong>&nbsp;<a href="https://t.me/+T0hc2pMg01diZmU6" rel="noopener noreferrer nofollow">Терентьев Фитнес.</a>&nbsp;Там ты найдешь много разумных и применимых к жизни рекомендаций по питанию и тренировкам. И чуть-чуть о закулисной жизни профессионального спортсмена, который справляется с травмами и готовится к Олимпийским играм.</p></blockquote><p></p>',
        },
        {
          id: "3",
          type: "IMAGE",
          src: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/ec1/711/486/ec1711486e3fded87bfb6411252a8682.png",
          alt: "Fat cat",
        },
      ],
    };
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articleData }));

    const response = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe("fulfilled");
    expect(response.payload).toEqual(articleData);
  });

  test("should be rejected, when status 403", async () => {
    const thunk = new TestAsyncThunk(getArticleData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const response = await thunk.callThunk("1");

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe("rejected");
    expect(response.payload).toEqual(undefined);
  });
});
