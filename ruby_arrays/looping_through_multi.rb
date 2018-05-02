require 'benchmark'

array = [[1,2,3], [4,5,6], [7,8,9]]


# Solution 1
array.flatten.each do |i|
  puts i * i
end

# Solution 2
array.each do |nested_array|
  nested_array.each do |num|
    puts num * num
  end
end


n = 10000000
Benchmark.bm do |x|
  x.report do
    # Solution 1
    n.times do
      array.flatten.each do |i|
        i * i
      end
    end
  end

  x.report do 
    n.times do
      array.each do |nested_array|
        nested_array.each do |num|
          num * num
        end
      end
    end 
  end
end
