
export interface ITitleMap {
  id?: string
  title: string
  content: string
  assets?: string
}

export interface IText {
  data: string
}

export interface LoaderProps {
  setLoadingComplete: (value: boolean) => void
}