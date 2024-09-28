
# Valorant API Wrapper

![Node.js](https://img.shields.io/badge/Node.js-v16.0.0-green) ![License](https://img.shields.io/badge/license-MIT-blue)

## Description

This project is a TypeScript wrapper for the Valorant API, allowing easy access to game data such as leaderboards, match information, and platform status.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)

## Features

- Retrieve competitive leaderboards.
- Obtain information about ongoing matches.
- Check the platform status.
- Manage game content.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate into the project directory:

   ```bash
   cd valorant-api
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Build the project:

   ```bash
   npm run build
   ```

## Usage

To use the wrapper, you first need to import the service you need into your project. Here's an example of how to use it:

```typescript
import { LeaderboardService } from 'valorant-api/dist/classes/LeaderboardService';

const leaderboardService = new LeaderboardService();

// Example of retrieving the leaderboard
leaderboardService.getLeaderboard('actId').then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error retrieving leaderboard:', error);
});
```

## Examples

### Retrieve Leaderboards

```typescript
import { LeaderboardService } from 'valorant-api/dist/classes/LeaderboardService';

const leaderboardService = new LeaderboardService();
const actId = 'exampleActId'; // Replace with a valid actId

leaderboardService.getLeaderboard(actId)
    .then(leaderboard => {
        console.log('Leaderboards:', leaderboard);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### Check Platform Status

```typescript
import { PlatformStatusService } from 'valorant-api/dist/classes/PlatformStatusService';

const platformStatusService = new PlatformStatusService();

platformStatusService.getPlatformStatus()
    .then(status => {
        console.log('Platform Status:', status);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you encounter any problems.

1. Fork the project
2. Create your branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push your branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## Authors

- **Voxary** - [GitHub](https://github.com/V-o-x-a-r-y)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
