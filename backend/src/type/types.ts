import snoowrap from "snoowrap";

export type Submission = snoowrap.Submission;
export type PostListing = snoowrap.Listing<Submission>;
export type Timespan = "hour" | "day" | "week" | "month" | "year" | "all";
export enum PostType {
    TOP,
    HOT,
    NEW,
    CONTROVERSIAL
}
