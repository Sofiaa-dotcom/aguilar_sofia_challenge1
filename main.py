while True:
    if input.acceleration(Dimension.X) > 2 and input.acceleration(Dimension.Y) > 2 and input.acceleration(Dimension.Z) >2:
        light.set_all(light.rgb(255, 102, 102))
    else:
        light.clear()
        