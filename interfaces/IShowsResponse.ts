export interface IShowResponse {
    score: number;
    show:  IShow;
}

export interface IShow {
    id:           number;
    url:          string;
    name:         string;
    type:         string;
    language:     string;
    genres:       string[];
    status:       string;
    runtime:      number | null;
    premiered:    string;
    officialSite: null | string;
    schedule:     ISchedule;
    rating:       IRating;
    weight:       number;
    network:      INetwork | null;
    webChannel:   INetwork | null;
    externals:    IExternals;
    image:        IImage;
    summary:      string;
    updated:      number;
    _links:       ILinks;
}

export interface ILinks {
    self:            IPreviousEpisode;
    previousepisode: IPreviousEpisode;
}

export interface IPreviousEpisode {
    href: string;
}

export interface IExternals {
    tvrage:  number | null;
    thetvdb: number;
    imdb:    null | string;
}

export interface IImage {
    medium:   string;
    original: string;
}

export interface INetwork {
    id:      number;
    name:    string;
    country: ICountry | null;
}

export interface ICountry {
    name:     string;
    code:     string;
    timezone: string;
}

export interface IRating {
    average: number | null;
}

export interface ISchedule {
    time: string;
    days: string[];
}
