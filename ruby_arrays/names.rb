# Solution 1
names = []

while !(names.include?('Exit')) do
  names << gets.chomp.capitalize
end

names.pop

puts "names: ", names


# Solution 2
result = []
loop do
  print 'Give me a name: '
  input = gets.chomp
  break if input == 'exit'
  result << input.capitalize.reverse
end

puts result