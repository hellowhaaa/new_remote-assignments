def two_sum(nums, target):
    dic = {}
    for i in range(len(nums)):
        if target-nums[i] in dic:
            return [i, dic[target-nums[i]]]
        dic[nums[i]] = i


ans = two_sum([2, 7, 11, 15], 9)
print(ans)