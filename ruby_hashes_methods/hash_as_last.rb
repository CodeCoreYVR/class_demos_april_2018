def my_method(a, b, hash)
  puts "A is #{a}"
  puts "B is #{b}"
  puts "hash is #{hash}"
end

my_method(4, 5, { a: 1, b: 2 })
my_method 4, 5, { a: 1, b: 2 }
my_method 4, 5, a: 1, b: 2