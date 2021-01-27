while True:
    print(input.acceleration(Dimension.X) and input.acceleration(Dimension.Y) and input.acceleration(Dimension.Z))
    if input.acceleration(Dimension.X) > 2 + input.acceleration(Dimension.Y) > 2 + input.acceleration(Dimension.Z) : 
        light.set_all(light.rgb(255, 102, 102))
    else:
        light.clear()
        