#include <iostream>
#include <vector>

void quicksort(std::vector<int>& a, int l, int r) {
    if (l < r) {
        int p = a[r];
        int i = l - 1;
        for (int j = l; j < r; j++) {
            if (a[j] < p) {
                i++;
                std::swap(a[i], a[j]);
            }
        }
        std::swap(a[i + 1], a[r]);
        int q = i + 1;
        quicksort(a, l, q - 1);
        quicksort(a, q + 1, r);
    }
}

int main() {
    std::vector<int> a = {34, 7, 23, 32, 5, 62};
    quicksort(a, 0, a.size() - 1);
    for (int x : a) {
        std::cout << x << " ";
    }
    std::cout << std::endl;
    return 0;
}

