export async function fetchGeocode() {
  const request = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=100+Rua+Sant+Luzia,+Florianópolis,+SC&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_APY_KEY as any}`, {
    method: "GET",
  });

  return request.json();
}