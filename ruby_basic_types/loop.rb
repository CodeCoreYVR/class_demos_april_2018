x = 1

# loop will create an infinite loop so make sure there a `break` somewhere in 
# your code block within it.
loop do
  puts x
  x += 1
  break if x == 37
end