export const handleSelectPhoto = ({ photo, onAction }) => {
  const reader = new FileReader()
  reader.readAsDataURL(photo)
  reader.onload = () => {
    const splitted = reader.result.split(',')
    const params = {
      imageBase64: splitted[1],
    }

    return onAction(params)
  }
}
