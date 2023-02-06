import Snoowrap from 'snoowrap';

export type Submission = Snoowrap.Submission;
export type PostListing = Snoowrap.Listing<Submission>;
export type Timespan = 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';

export type Posts = {
        top: PostListing;
        hot: PostListing;
        new: PostListing;
        controversial: PostListing;
}
