import snoowrap from "snoowrap";

export type Submission = snoowrap.Submission;
export type PostListing = snoowrap.Listing<Submission>;
export type Timespan = "hour" | "day" | "week" | "month" | "year" | "all";

export type Posts = {
        top: PostListing | null;
        hot: PostListing | null;
        new: PostListing | null;
        controversial: PostListing | null;
}
