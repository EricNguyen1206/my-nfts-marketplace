declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

declare module "*.gif" {
    const path: string;
    export default path;
}

declare module "*.webp" {
    const path: string;
    export default path;
}

declare module "*.d.ts" {
    const path: string;
    export default path;
}

declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.css" {
    const content: Record<string, string>;
    export default content;
}
