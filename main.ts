while (true) {
    console.log(input.acceleration(Dimension.X) && input.acceleration(Dimension.Y) && input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.X) > 2 + input.acceleration(Dimension.Y) && 2 + input.acceleration(Dimension.Y) > 2 + input.acceleration(Dimension.Z)) {
        light.setAll(light.rgb(255, 102, 102))
    } else {
        light.clear()
    }
    
}
