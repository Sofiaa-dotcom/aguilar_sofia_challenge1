while (true) {
    if (input.acceleration(Dimension.X) > 2 && input.acceleration(Dimension.Y) > 2 && input.acceleration(Dimension.Z) > 2) {
        light.setAll(light.rgb(255, 102, 102))
    } else {
        light.clear()
    }
    
}
