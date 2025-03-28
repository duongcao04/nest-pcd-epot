export const isObjectEmpty = (objectName: object) => {
    return (
        Object.keys(objectName).length === 0 &&
        objectName.constructor === Object
    )
}
