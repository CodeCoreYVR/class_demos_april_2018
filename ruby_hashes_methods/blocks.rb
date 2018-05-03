def my_method(name = '')
  puts "Hello #{name}"
  # allow methods to put their code in here
  # yield wil execute the block passed to the method
  yield if block_given?
  puts 'Bye'
end

my_method do
  puts 'What\'s up'
end

my_method do
  puts 'What\'s up'
  puts 'Hey'
  puts 'Heello'
end

my_method('Tam') { puts 'hey!' }