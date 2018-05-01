result = 0

loop do
  print 'Give me a number (type exit to see sum): '
  input = gets.chomp
  break if input == 'exit'
  result += input.to_f
end

puts result

