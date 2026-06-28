export const FIGHTS_QUERY = `
  *[_type == "fight" && isActive == true] | order(date asc) {
    _id,
    date,
    venue,
    ourFighter,
    opponent,
    opponentClub,
    weightClass,
    result,
    ticketUrl
  }
`

export const COACHES_QUERY = `
  *[_type == "coach"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    credentials,
    "photoUrl": photo.asset->url
  }
`

export const SCHEDULE_QUERY = `
  *[_type == "scheduleRow" && isActive == true] | order(
    select(
      day == "Monday"    => 1,
      day == "Tuesday"   => 2,
      day == "Wednesday" => 3,
      day == "Thursday"  => 4,
      day == "Friday"    => 5,
      day == "Saturday"  => 6,
      7
    ) asc
  ) {
    _id,
    day,
    time,
    className,
    level
  }
`
