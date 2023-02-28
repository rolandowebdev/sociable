import { Loading } from '../Loading'
import { Pin } from '../Pin'

export const AnotherPins = ({ pins }) => {
  if (!pins) return <Loading message="More Pins..." />
  return (
    <>
      {pins && (
        <h2 className="mt-8 mb-3 text-2xl font-bold text-center">
          More like this
        </h2>
      )}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {pins?.map((pin) => (
          <Pin key={pin?._id} pin={pin} className="w-max" />
        ))}
      </div>
    </>
  )
}
