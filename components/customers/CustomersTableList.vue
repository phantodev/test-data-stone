<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Phone</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>35</td>
        <td>john.doe@example.com</td>
        <td>(123) 456-7890</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jane Smith</td>
        <td>28</td>
        <td>jane.smith@example.com</td>
        <td>(234) 567-8901</td>
        <td>Los Angeles</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Michael Johnson</td>
        <td>45</td>
        <td>michael.johnson@example.com</td>
        <td>(345) 678-9012</td>
        <td>Chicago</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Emily Brown</td>
        <td>32</td>
        <td>emily.brown@example.com</td>
        <td>(456) 789-0123</td>
        <td>Houston</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Daniel Wilson</td>
        <td>40</td>
        <td>daniel.wilson@example.com</td>
        <td>(567) 890-1234</td>
        <td>Phoenix</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Sarah Taylor</td>
        <td>29</td>
        <td>sarah.taylor@example.com</td>
        <td>(678) 901-2345</td>
        <td>Philadelphia</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Christopher Martinez</td>
        <td>38</td>
        <td>christopher.martinez@example.com</td>
        <td>(789) 012-3456</td>
        <td>San Antonio</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Amanda Anderson</td>
        <td>31</td>
        <td>amanda.anderson@example.com</td>
        <td>(890) 123-4567</td>
        <td>San Diego</td>
      </tr>
      <tr>
        <td>9</td>
        <td>James Thomas</td>
        <td>36</td>
        <td>james.thomas@example.com</td>
        <td>(901) 234-5678</td>
        <td>Dallas</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Jessica Garcia</td>
        <td>27</td>
        <td>jessica.garcia@example.com</td>
        <td>(012) 345-6789</td>
        <td>San Jose</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
  font-size: 0.875rem;
}
th {
  background-color: #f2f2f2;
}
</style>
