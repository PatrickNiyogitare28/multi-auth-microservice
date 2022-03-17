/* eslint-disable  @typescript-eslint/no-explicit-any */
export type Profile = {
    readonly id: number;
    readonly displayName: string;
    readonly profileUrl: string;
    readonly badgeCounts?: any;
    readonly reputation: number;
    readonly isEmployee: boolean;
    readonly lastModifiedDate: Date;
    readonly lastAccessDate: Date;
    readonly creationDate: Date;
    readonly userType: string;
    readonly userId: number;
    readonly link: string;
    readonly acceptRate: number;
    readonly location?: string;
    readonly website?: string;
    readonly photos?: string[];
    readonly reputationChange: any;
    readonly provider: string;
    readonly _raw: string;
    readonly _json: any;
} 