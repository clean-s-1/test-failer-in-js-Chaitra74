export function TshirtSizeFinder(shoulderSizeInCms){    
    if (shoulderSizeInCms <= 38) {
        return 'S';
    } else if (shoulderSizeInCms > 38 && shoulderSizeInCms <= 42) {
        return 'M';
    } else {
        return 'L';
    }
 }
