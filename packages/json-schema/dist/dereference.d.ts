import { URL } from 'url';
import { Schema } from './types.js';
export declare const schemaKeyword: Record<string, boolean>;
export declare const schemaArrayKeyword: Record<string, boolean>;
export declare const schemaMapKeyword: Record<string, boolean>;
export declare const ignoredKeyword: Record<string, boolean>;
export declare function dereference(schema: Schema | boolean, lookup?: Record<string, Schema | boolean>, baseURI?: URL | undefined, basePointer?: string): Record<string, Schema | boolean>;
