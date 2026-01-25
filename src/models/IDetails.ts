export interface IWorkCategory {
  category: string;
  items: string[];
}

export interface IDetails {
  about: string,
  introduction: string,
  titleImage?: string,
  whatIWorkedOn?: string,
  workCategories?: IWorkCategory[],
  gifs: string[]
  whatILearned: string,
  gifsFooter: string[],
  link: {
    title: string,
    url: string,
  };
  imageSrc: string;
}