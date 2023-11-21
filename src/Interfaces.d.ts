export interface JobInterface {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  filterArr: string[];
  setFilterArr: StateUpdater<string[]>;
}

export interface FilterCriteriasInterface {
  language?: string;
  tool?: string;
  role?: string;
  level?: string;
  filterArr: string[];
  setFilterArr: StateUpdater<string[]>;
}

export interface filterArrInterface {
  filterArr: string[];
  setFilterArr: StateUpdater<string[]>;
}

export interface CriteriaInterface {
  criteriaKey: string;
  criteria: string;
  filterArr: string[];
  setFilterArr: StateUpdater<string[]>;
}
