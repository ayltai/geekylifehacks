import { EntryFieldTypes, } from 'contentful';

export type Agreement = {
    contentTypeId : 'agreement',
    fields        : {
        id          : EntryFieldTypes.Symbol,
        title       : EntryFieldTypes.Symbol,
        lastUpdated : EntryFieldTypes.Date,
        content     : EntryFieldTypes.RichText,
    },
};
