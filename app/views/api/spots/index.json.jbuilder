@spots.each do |spot|
  json.partial! 'spot', spot: spot
end
