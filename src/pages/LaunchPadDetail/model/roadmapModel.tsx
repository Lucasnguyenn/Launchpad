interface IItemRoadMap {
  id: number;
  title: string;
  isCheck: boolean;
}

export interface IRoadMapModel {
  titleDate: string;
  status: string;
  content: IItemRoadMap[];
}
